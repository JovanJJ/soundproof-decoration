export default function Spinner(){
    return (
    <div className="fixed inset-0 z-50 h-screen flex flex-col items-center justify-center gap-3">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
}