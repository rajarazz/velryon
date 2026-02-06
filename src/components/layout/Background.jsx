import NeuralBackground from "../ui/NeuralBackground";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <NeuralBackground
        color="#818cf8"
        trailOpacity={0.1}
        speed={0.4}
      />
    </div>
  );
}
