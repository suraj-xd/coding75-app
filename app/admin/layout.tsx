import Footer from "@/components/footer";

const AdminLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-white">
        <div className="min-h-full ">
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default AdminLayout;