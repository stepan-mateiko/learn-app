import Button from "../Button/Button";
import Input from "../Input/Input";

interface RegistrationFormProps {
  role: string;
  imgSrc: string;
}
const RegistrationForm: React.FC<RegistrationFormProps> = ({
  role,
  imgSrc,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Registration</h2>
        <p>{role}</p>
        <div>
          <img src={imgSrc} alt={`registration as ${role}`} />
        </div>
      </div>
      <form action="#" method="POST">
        <Input
          type="text"
          label="First name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="text"
          label="Last name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
        <Input
          type="email"
          label="Email"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />

        {role === "trainer" && (
          <Input
            type="select"
            label="specialization"
            value=""
            onChange={(e) => {
              console.log(e);
            }}
            options={["Front-end", "UI/UX Design", "QA"]}
          />
        )}
        {role === "student" && (
          <Input
            type="date"
            label="Date of birth (Optional)"
            value=""
            onChange={(e) => {
              console.log(e);
            }}
          />
        )}
        {role === "student" && (
          <Input
            type="text"
            label="Address (Optional)"
            value=""
            onChange={(e) => {
              console.log(e);
            }}
          />
        )}
        <Button buttonText="Submit" isSubmit={true} />
      </form>
    </div>
  );
};

export default RegistrationForm;
