import Header from '@/shared/component/header/header';


export default function AuthenticatedLayout ({
 children,
}: {
    children: React.ReactNode
}) {
 return (
  <div>
   <Header />
   {children}
  </div>
 );
}
