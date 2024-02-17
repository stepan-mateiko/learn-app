import { useParams } from "react-router-dom";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import registrationTrainerImg from "../../assets/images/registration-trainer.png";
import registrationStudentImg from "../../assets/images/registration-student.png";

const Registration: React.FC = () => {
  const { role = "student" } = useParams<{ role?: string }>();

  return (
    <div className="registration">
      <h2>Registration</h2>
      <p>{role}</p>
      <div className="registration__wrapper">
        <div className="registration__image">
          <img
            src={
              role === "student"
                ? registrationStudentImg
                : registrationTrainerImg
            }
            alt={`registration as ${role}`}
          />
        </div>
        <RegistrationForm role={role} />
      </div>
    </div>
  );
};

export default Registration;
