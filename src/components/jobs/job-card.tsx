import { MapPin, Clock, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface JobCardProps {
  id?: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  logo?: string;
  tags: string[];
  posted: string;
}

export default function JobCard({
  id = "1",
  title,
  company,
  location,
  type,
  salary,
  tags,
  posted
}: JobCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/jobs/${id}`);
  };

  return (
    <div
      className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-xl font-bold text-primary">
            {company[0]}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{posted}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary">{type}</Badge>
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {salary && (
        <div className="mb-4 text-sm">
          <span className="font-semibold text-foreground">{salary}</span>
        </div>
      )}

      <Button
        className="w-full"
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/jobs/${id}`);
        }}
      >
        View Details
      </Button>
    </div>
  );
}
