import {cn} from '@/lib/utils';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({children, className}: HeaderProps) {
  return (
    <header>
      {/* 
        Origianl class name: flex flex-col p-2 text-[0.65rem] gap-y-0
      */}
      <div className={cn('', className)}>{children}</div>
    </header>
  );
}
