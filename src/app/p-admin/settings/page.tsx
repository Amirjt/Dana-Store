import Profile from "@/components/modules/Profile";
import authUser from "@/lib/authUser";

const SettingsPage = async () => {
  const user = await authUser();
  return <Profile user={user} />;
};

export default SettingsPage;
