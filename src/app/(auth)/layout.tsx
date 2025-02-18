import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-gray-50'>
      <div className='flex flex-col justify-center'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md flex justify-center'>
          <Image width={400} height={400} src={"/assets/image/default.png"} alt={'logo'} />
        </div>
        {children}
      </div>
    </div>
  );
}
