import Image from 'next/image';
import Icon, { IconName } from './icon';

interface CardProps {
  iconName: IconName,
  title: string,
  description?: string,
  className?: string,
  iconClassName?: string,  // Tailwind classes for the icon (e.g. 'fill-primary')
}

const Card = ({
  iconName,
  title,
  description,
  iconClassName = "w-6 h-6 fill-primary text-primary",
  className = ""
}: CardProps) => {
  return (
    <div className={`
      flex w-56 px-2 py-5 flex-col items-start gap-2.5 rounded-[10px]
      border-[3px] border-card-border bg-card shadow-elev-200
      ${description ? 'h-full' : 'h-auto'} ${className}
    `}>
      <div className="flex flex-col justify-center items-start gap-5 self-stretch">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex-none text-primary">
            <Icon name={iconName} className={iconClassName} />
          </div>
          <h3 className="text-text text-h3 m-0 min-w-0 flex-1 break-all">
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-muted-text text-body m-0 flex-1 break-all">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;