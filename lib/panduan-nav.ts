export interface PanduanNavLink {
  href: string;
  label: string;
}

export interface PanduanNavGroup {
  label: string;
  links: PanduanNavLink[];
}

export const PANDUAN_NAV_GROUPS: PanduanNavGroup[] = [
  {
    label: "MEMULAI",
    links: [{ href: "/panduan", label: "Mengenal Hub Venturo" }],
  },
  {
    label: "NAVIGASI & AKUN",
    links: [
      { href: "/panduan/header-filter", label: "1. Header & Filter Global" },
      { href: "/panduan/pengaturan-tampilan", label: "2. Pengaturan Tampilan" },
      { href: "/panduan/profil-pengguna", label: "3. Profil Pengguna" },
    ],
  },
  {
    label: "MONITORING",
    links: [
      { href: "/panduan/aktivitas-karyawan", label: "1. Aktivitas Karyawan" },
      { href: "/panduan/screenshot-aktivitas", label: "2. Screenshot Aktivitas" },
      { href: "/panduan/pemakaian-aplikasi", label: "3. Pemakaian Aplikasi" },
      { href: "/panduan/pemakaian-situs", label: "4. Pemakaian Situs (URL)" },
    ],
  },
  {
    label: "MANAJEMEN",
    links: [
      { href: "/panduan/manajemen-user", label: "1. Manajemen User" },
      { href: "/panduan/role-akses", label: "2. Role & Akses" },
      { href: "/panduan/pengaturan-wfa", label: "3. Pengaturan" },
    ],
  },
  {
    label: "REFERENSI",
    links: [{ href: "/panduan/referensi", label: "Glosarium & Catatan Audit" }],
  },
];

// Flattened, in reading order — used to derive prev/next page-nav links.
export const PANDUAN_FLAT_LINKS: PanduanNavLink[] = PANDUAN_NAV_GROUPS.flatMap((group) => group.links);

export function getPanduanPageNav(currentHref: string) {
  const index = PANDUAN_FLAT_LINKS.findIndex((link) => link.href === currentHref);
  return {
    prev: index > 0 ? PANDUAN_FLAT_LINKS[index - 1] : undefined,
    next: index >= 0 && index < PANDUAN_FLAT_LINKS.length - 1 ? PANDUAN_FLAT_LINKS[index + 1] : undefined,
  };
}
