import { useParams } from "react-router-dom";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const Registration: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  return (
    <div>
      <RegistrationForm role={role} />
    </div>
  );
};

export default Registration;
