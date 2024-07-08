function CarDetails({ Description, MSRP }) {
  return (
    <>
      <p>
        {Description}
        <br />
        MSRP: {MSRP}
      </p>
    </>
  );
}

export default CarDetails;
