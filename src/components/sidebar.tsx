import Image from "next/image";
import briefcase from "@/assets/image/icons/briefcase.svg";
import arrowDown from "@/assets/image/icons/arrow_down.svg";
import { customersNavigations } from "@/utils/constants";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside>
            <div>
                <button>
                    <Image src={briefcase} alt="briefcase" />
                    <span>Switch Organization</span>
                    <Image src={arrowDown} alt="arrow down" />
                </button>

                <button>
                    <Image src={briefcase} alt="briefcase" />
                    <span>Dashboard</span>
                </button>

                <p className="nav-heading">Customers</p>
                <ul>
                    {
                        customersNavigations.map((nav, id) => (
                            <li>
                                <Link href="/">
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </aside>
    )
}