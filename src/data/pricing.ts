import Free from "@/picture/free.png";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";
import basic from "@/picture/basic.png";
import diamonds from "@/picture/diamonds.png"
import enterprise from "@/picture/enterprise.png"
import gold from "@/picture/gold.png"
import platinum from "@/picture/platinum.png"
import silver from "@/picture/silver.png"

export interface Feature {
    text: string;
    isAvailable: boolean;
}

export interface PricingPlan {
    id: string;
    badge: string;
    badgeIcon: string;
    price: string;
    period: string;
    buttonText: string;
    features: Feature[];
}

export const PRICING_PLANS: PricingPlan[] = [
    {

        id: "free-2",
        badge: "FREE",
        badgeIcon: Free.src,
        price: "Gratis!",
        period: "/ 2 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: false },
            { text: "Max. 50 Karyawan", isAvailable: true },
            { text: "Paket Gratis untuk 50 Karyawan", isAvailable: true },
        ]
    },
    {

        id: "free-12",
        badge: "FREE",
        badgeIcon: Free.src,
        price: "Gratis!",
        period: "/ 12 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: false },
            { text: "Max. 5 Karyawan", isAvailable: true },
            { text: "Paket Gratis untuk 50 Karyawan", isAvailable: true },
        ]
    },
    {

        id: "basic",
        badge: "BASIC",
        badgeIcon: basic.src,
        price: "Rp 33.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 15 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan Kecil / Mikro", isAvailable: true },
        ]
    },
    {

        id: "silver",
        badge: "SILVER",
        badgeIcon: silver.src,
        price: "Rp 83.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 40 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan Kelas Menengah", isAvailable: true },
        ]
    },
    {

        id: "gold",
        badge: "GOLD",
        badgeIcon: gold.src,
        price: "Rp 150.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 100 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan Menengah Keatas", isAvailable: true },
        ]
    },
    {

        id: "platinum",
        badge: "PLATINUM",
        badgeIcon: platinum.src,
        price: "Rp 230.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 130 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan Menengah Keatas", isAvailable: true },
        ]
    },
    {

        id: "diamond",
        badge: "DIAMOND",
        badgeIcon: diamonds.src,
        price: "Rp 330.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 200 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan/Usaha Kelas Atas", isAvailable: true },
        ]
    },
    {

        id: "enterprise",
        badge: "ENTERPRISE",
        badgeIcon: enterprise.src,
        price: "Rp 465.000",
        period: "/ 1 Bulan",
        buttonText: "Pilih Paket",
        features: [
            { text: "Akses Fitur Premium", isAvailable: true },
            { text: "Max. 300 Karyawan", isAvailable: true },
            { text: "Untuk Perusahaan Kelas Atas", isAvailable: true },
        ]
    },
]