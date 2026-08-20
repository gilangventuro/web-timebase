"use client";

import { useState } from "react";
import styles from "./HargaPricingTable.module.css";

type BillingCycle = "monthly" | "annual";

interface PlanDef {
  id: "silver" | "platinum" | "gold";
  name: string;
  tagline: string;
  bestSeller?: boolean;
}

interface PlanPrice {
  monthly: string;
  monthlyWas?: string;
  annualMonthly: string;
  annualTotal: string;
}

interface PriceRow {
  tier: string;
  note: string | null;
  prices: {
    silver: PlanPrice;
    platinum: PlanPrice;
    gold: PlanPrice;
  };
}

interface HargaPricingTableProps {
  plans: readonly PlanDef[];
  rows: readonly PriceRow[];
}

export default function HargaPricingTable({ plans, rows }: HargaPricingTableProps) {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <div>
      <div className={styles.billingToggle} role="group" aria-label="Pilih siklus pembayaran">
        <button
          type="button"
          className={billing === "monthly" ? styles.billingBtnActive : styles.billingBtn}
          aria-pressed={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Bulanan
        </button>
        <button
          type="button"
          className={billing === "annual" ? styles.billingBtnActive : styles.billingBtn}
          aria-pressed={billing === "annual"}
          onClick={() => setBilling("annual")}
        >
          Tahunan
          <span className={styles.billingBadge}>Hemat 20%</span>
        </button>
      </div>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tierHeadCell} scope="col">
                <span className={styles.tierHeadTitle}>Paket Kami</span>
                <span className={styles.tierHeadSub}>per user/bulan</span>
              </th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col" className={`${styles.planHeadCell} ${styles[`planHead_${plan.id}`]}`}>
                  {plan.bestSeller && <span className={styles.ribbon}>Best Seller</span>}
                  <span className={styles.planName}>{plan.name}</span>
                  <span className={styles.planTagline}>{plan.tagline}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.tier}>
                <th scope="row" className={styles.tierCell}>
                  {row.tier}
                  {row.note && <span className={styles.tierNote}>{row.note}</span>}
                </th>
                {plans.map((plan) => {
                  const p = row.prices[plan.id];
                  return (
                    <td
                      key={plan.id}
                      className={`${styles.priceCell} ${plan.id === "gold" ? styles.priceCellGold : ""}`}
                    >
                      {billing === "monthly" ? (
                        <>
                          {p.monthlyWas && <span className={styles.priceWas}>Rp {p.monthlyWas}</span>}
                          <span className={styles.price}>
                            Rp {p.monthly}
                            <span className={styles.priceUnit}>/bulan</span>
                          </span>
                        </>
                      ) : (
                        <>
                          <span className={styles.price}>
                            Rp {p.annualMonthly}
                            <span className={styles.priceUnit}>/bulan</span>
                          </span>
                          <span className={styles.priceAnnualNote}>Rp {p.annualTotal}/tahun</span>
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.scrollHint}>Geser ke samping untuk membandingkan paket &rarr;</p>
    </div>
  );
}
