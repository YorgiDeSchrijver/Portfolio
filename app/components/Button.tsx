import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const textVariants = cva('', {
  variants: {
    size: {
      default: 'px-18 py-2.5 text-2xl',
      md: 'px-12 py-2.5 text-xl',
      sm: 'px-12 py-2 text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const iconVariants = cva('', {
  variants: {
    iconSize: {
      default: 'p-3.5',
      md: 'p-2',
      sm: 'p-1',
    },
  },
  defaultVariants: {
    iconSize: 'default',
  },
});

interface ButtonProps
  extends VariantProps<typeof textVariants>, VariantProps<typeof iconVariants> {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
  size,
  iconSize,
}: ButtonProps) {
  const textClass = textVariants({ size });
  const iconClass = iconVariants({ iconSize });
  return (
    <Link to={href} className='flex flex-row items-end gap-3 justify-end group'>
      <span
        className={`bg-light text-dark text-nowrap rounded-full italic ${textClass}`}
      >
        {children}
      </span>
      <span
        className={`bg-light rounded-full text-dark ${iconClass} `}
      >
        <ArrowRight
          size={24}
          strokeWidth={1.5}
          className='group-hover:-rotate-45 transition-all duration-300'
        />
      </span>
    </Link>
  );
}
