import {cn} from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({children, className}: ContainerProps) {
  return (
    <body>
      {/* 
        Origianl class name: flex flex-col flex-grow h-full pb-6 py-0 pt-0 items-center justify-center
      */}
      <div className={cn('', className)}>{children}</div>
    </body>
  );
}
