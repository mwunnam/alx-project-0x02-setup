import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div>
      <h2 className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">{title}</h2>
      <p classname="text-gray-700">{content}</p>
    </div>
  )
}
