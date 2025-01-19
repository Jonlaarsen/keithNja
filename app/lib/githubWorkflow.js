export const TriggerWorkflow = async (operationType) => {
    const response = await fetch(
      `https://api.github.com/repos/{owner}/{repo}/actions/workflows/deploy.yml/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // GitHub token stored in environment variables
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: 'main', // Specify the branch to run the workflow
          inputs: {
            operation: operationType, // Pass the operation type (create, edit, delete)
          },
        }),
      }
    );
  
    if (!response.ok) {
      console.error('Failed to trigger workflow:', await response.text());
    } else {
      console.log(`Workflow triggered successfully for ${operationType} operation.`);
    }
  };
  