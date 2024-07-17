const LoopingVideo = ({ src, width = '100%', height = 'auto' }) => {
    return (
      <video width={width} height={height} loop autoPlay muted>
        <source src={src} type="video/mp4" />
      </video>
    );
  };
  
  export default LoopingVideo;