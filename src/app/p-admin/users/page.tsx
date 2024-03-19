import UsersTable from "@/components/templates/AdminPanel/Users/UsersTable";
import connectToDb from "@/lib/db";
import UserModel from "@/models/User";

const UsersPage = async () => {
  connectToDb();
  const users = await UserModel.find({}).lean().sort({ _id: -1 });
  return (
    <>
      <h2 className="font-bold text-primary text-lg p-3">لیست کاربران</h2>
      <UsersTable users={JSON.parse(JSON.stringify(users))} />
    </>
  );
};

export default UsersPage;
