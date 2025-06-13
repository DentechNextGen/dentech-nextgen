import SplashtopEmbed from "../components/SplashtopEmbed";

export default function RemoteSupportPage() {
  return (
    <div className="max-w-2xl justify-center items-center flex flex-col mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Remote Support</h1>
      <p className="mb-8 text-lg text-gray-700">
        Need help? Click the button below to download our secure remote support
        tool for Windows. A Dentech support technician will assist you shortly.
      </p>
      <SplashtopEmbed platform="win" color="green" />
    </div>
  );
}
