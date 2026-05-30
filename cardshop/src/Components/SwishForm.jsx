import { useNavigate } from "react-router-dom";

function SwishForm() {
  const navigate = useNavigate();

  const handleSwish = (e) => {
    e.preventDefault();

    navigate("/confirmation");
  };
  return (
    <form onSubmit={handleSwish} className="Payment-form">
      <input
        type="tel"
        placeholder="0701234567"
        minLength={10}
        maxLength={10}
        pattern="[0-9]+" //gör så att man inte kan skriva in bokstäver
        required
      />
      <button type="submit">Pay with Swish</button>
    </form>
  );
}

export default SwishForm;
