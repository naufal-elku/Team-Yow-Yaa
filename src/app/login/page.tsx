'use client';

import React, { useState } from 'react';

export default function LoginForm() {
  // 1. State Input Form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 2. State Error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // KONDISI 1 (Gambar 1.a): Tombol 'Disabled' jika salah satu input masih kosong
  const isFormEmpty = !email.trim() || !password.trim();

  // Handle Submit & Simulasi Validasi UI
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setEmailError('');
    setPasswordError('');

    // Data Dummy untuk Simulasi Uji Coba UI
    const VALID_EMAIL = 'emailanda@gmail.com';
    const VALID_PASSWORD = 'password123';

    // KONDISI 2 (Gambar 1.b): Email Salah / Tidak Ditemukan
    if (email !== VALID_EMAIL) {
      setEmailError('Email yang Anda masukkan tidak ditemukan di sistem kami');
      return;
    }

    // KONDISI 3 (Gambar 1.c): Password Salah
    if (password !== VALID_PASSWORD) {
      setPasswordError('Password yang Anda masukkan salah');
      return;
    }

    // Jika Sukses (Semua Benar)
    alert('Login Berhasil!');
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      
      {/* ================= SISI KIRI: FORM LOGIN ================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-8 py-10 lg:px-20">
        
        {/* Logo Presensi */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-xs">
            ✓
          </div>
          <span className="text-xl font-bold text-[#0D253F] tracking-tight">Presensi</span>
        </div>

        {/* Content Form Utama */}
        <div className="my-auto max-w-sm w-full mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Masuk akun</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* INPUT EMAIL */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(''); // Hapus error saat user mengetik
                }}
                placeholder="emailanda@gmail.com"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                  emailError
                    ? 'border-red-500 bg-red-50/20 text-red-900 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              
              {/* Pesan Error Email (Tampilan 1.b) */}
              {emailError && (
                <p className="text-[11px] text-red-500 mt-1.5 leading-tight">
                  {emailError}
                </p>
              )}
            </div>

            {/* INPUT PASSWORD */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(''); // Hapus error saat user mengetik
                  }}
                  placeholder="Masukkan password"
                  className={`w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border outline-none transition-all ${
                    passwordError
                      ? 'border-red-500 bg-red-50/20 text-red-900 focus:ring-1 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                  }`}
                />
                
                {/* Icon Show/Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Link Lupa Password */}
              <div className="flex justify-end mt-1.5">
                <a href="#" className="text-[11px] text-blue-600 hover:underline font-medium">
                  Lupa password?
                </a>
              </div>

              {/* Pesan Error Password (Tampilan 1.c) */}
              {passwordError && (
                <p className="text-[11px] text-red-500 mt-1 leading-tight">
                  {passwordError}
                </p>
              )}
            </div>

            {/* TOMBOL MASUK SEKARANG */}
            <button
              type="submit"
              disabled={isFormEmpty}
              className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${
                isFormEmpty
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#1877F2] hover:bg-blue-700 text-white cursor-pointer shadow-sm active:scale-[0.99]'
              }`}
            >
              Masuk sekarang
            </button>

          </form>

          {/* Link Daftar */}
          <p className="text-center text-xs text-gray-500 pt-2">
            Belum punya akun?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Daftar disini
            </a>
          </p>
        </div>

        <div />
      </div>

      {/* ================= SISI KANAN: BANNER VISUAL ================= */}
      <div 
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-abstract.svg')" }}
      />

    </div>
  );
}