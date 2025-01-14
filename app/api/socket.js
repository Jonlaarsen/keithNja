import { Server } from 'socket.io';

export default (req, res) => {
  if (req.method === 'GET') {
    const io = new Server(res.socket.server);
    io.on('connection', (socket) => {
      console.log('A user connected');
      
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });

    // Return a 200 OK to acknowledge connection
    res.status(200).end();
  } else {
    res.status(404).end();
  }
};
