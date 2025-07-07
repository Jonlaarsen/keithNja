export const triggerVercelDeploy = async (operationType) => {
  try {
    const response = await fetch('/api/redeploy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operation: operationType
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to trigger deployment: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(`Vercel deployment triggered successfully for ${operationType} operation`);
    return result;
    
  } catch (error) {
    console.error('Error triggering Vercel deployment:', error);
    throw error;
  }
}; 