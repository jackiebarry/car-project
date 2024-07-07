function CarImage({ imageUrl, backupImageUrl }) {
  return (
    <>
      <img src={imageUrl || backupImageUrl} alt="car" />
    </>
  );
}

export default CarImage;
