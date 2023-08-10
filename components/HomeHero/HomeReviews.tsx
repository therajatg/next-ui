interface Props {
  rating: number;
}

export const HomeReviews: React.FC<Props> = ({ rating }) => {
  const getClassNameForStar = (star: number) =>
    star <= rating ? "text-orange-500" : "text-gray-400";

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 fill-current ${getClassNameForStar(star)}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};
