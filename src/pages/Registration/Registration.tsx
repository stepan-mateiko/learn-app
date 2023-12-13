import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import registrationTrainerImg from "../../assets/images/registration-trainer.png";
import registrationStudentImg from "../../assets/images/registration-student.png";

const Registration: React.FC = () => {
  return (
    <div>
      <RegistrationForm role="trainer" imgSrc={registrationTrainerImg} />
      <RegistrationForm role="student" imgSrc={registrationStudentImg} />
    </div>
  );
};

export default Registration;
