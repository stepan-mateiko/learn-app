import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Lock } from "../../components/Icon/Icon";

const ChangePassword: React.FC = () => {
  return (
    <div>
      <h3>Security</h3>
      <div style={{ display: "flex" }}>
        <div>
          <Lock /> Change password
        </div>
        <form action="#" method="post">
          <Input
            type="password"
            value=""
            label="Current password"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <Input
            type="password"
            value=""
            label="New password"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <Input
            type="password"
            value=""
            label="Confirm new password"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <div>
            <Button buttonText="Cancel" />
            <Button buttonText="Change password" isSubmit={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
