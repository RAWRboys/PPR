
import { connection } from "next/server";

export default async function DeviceStatus() {
  // Menunggu request masuk sebelum menjalankan kode dinamis
  await connection();

  const requestTime = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Status Perangkat
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Informasi perangkat berdasarkan request terbaru
          </p>
        </div>

        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          Online
        </span>
      </div>

      <div className="mt-5 rounded-xl bg-black/20 p-5">
        <p className="text-sm text-gray-400">
          Waktu Request
        </p>

        <p className="mt-2 text-lg font-semibold text-white">
          {requestTime}
        </p>

        <p className="mt-3 text-xs text-gray-500">
          Status diperiksa ketika halaman diminta oleh pengguna.
        </p>
      </div>
    </div>
  );
}
