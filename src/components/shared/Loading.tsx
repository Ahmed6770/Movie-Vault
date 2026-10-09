function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin" />
      <span className="text-sm text-slate-400 font-medium">Loading...</span>
    </div>
  );
}

export default Loading;
