import Free from "@/picture/free.png";
import minus from "@/picture/minus.png";
import check from "@/picture/check.png";
import basic from "@/picture/basic.png";

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
]