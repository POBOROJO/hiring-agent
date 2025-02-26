export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">AI Hiring Agent</h1>
      
      <form 
        action="/api/submit" 
        method="POST"
        encType="multipart/form-data"
        className="space-y-4 border p-6 rounded-lg"
      >
        <div className="space-y-2">
          <label className="block font-medium">Candidate Name</label>
          <input
            name="name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Email</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Resume (PDF)</label>
          <input
            name="resume"
            type="file"
            accept=".pdf"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}