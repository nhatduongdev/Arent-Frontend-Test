import { KnifeIcon, CupIcon } from "@/assets/icons";
import d01 from '@/assets/images/home/d01.jpg';
import d02 from '@/assets/images/home/d02.jpg';
import l01 from '@/assets/images/home/l01.jpg';
import l02 from '@/assets/images/home/l02.jpg';
import l03 from '@/assets/images/home/l03.jpg';
import m01 from '@/assets/images/home/m01.jpg';
import s01 from '@/assets/images/home/s01.jpg';

export const categories = [
    { label: "Morning", icon: KnifeIcon },
    { label: "Lunch", icon: KnifeIcon },
    { label: "Dinner", icon: KnifeIcon },
    { label: "Snack", icon: CupIcon },
];

export const records = [
    { id: 1, date: "05.21", label: "Morning", img: d01 },
    { id: 2, date: "05.21", label: "Lunch", img: d02 },
    { id: 3, date: "05.21", label: "Dinner", img: l01 },
    { id: 4, date: "05.21", label: "Snack", img: l02 },
    { id: 5, date: "05.20", label: "Morning", img: l03 },
    { id: 6, date: "05.20", label: "Lunch", img: m01 },
    { id: 7, date: "05.20", label: "Dinner", img: s01 },
    { id: 8, date: "05.20", label: "Snack", img: d01 },
];