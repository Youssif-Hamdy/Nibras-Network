"use client";

import Link from "next/link";
import type { BookTrialCopy } from "@/lib/i18n/bookTrialContent";
import { PRIVATE_PKGS, GROUP_PKGS, FAM_ROWS, type FamRow } from "@/lib/pricing/packageTiers";
import {
  isFamilyMemberComplete,
  type FamilyMemberProfile,
} from "@/components/FamilyMemberModal";
import { User, Users, UsersRound, ClipboardCheck } from "lucide-react";

type PackageCategory = "p" | "g" | "f";

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#d8e5db] bg-[#f9fbf9] p-5 sm:p-6">
      {children}
    </div>
  );
}

export function PackageStepBlock({
  copy,
  isAr,
  req,
  labelCls,
  selectBase,
  packageCategory,
  selectedPkg,
  isFamilyPkg,
  familyMemberCount,
  familyMembers,
  familyRowIndex,
  familyRowIdx,
  familyRow,
  onSelectCategory,
  onSelectPackage,
  onFamilyHoursChange,
  onOpenMember,
}: {
  copy: BookTrialCopy;
  isAr: boolean;
  req: React.ReactNode;
  labelCls: string;
  selectBase: string;
  packageCategory: PackageCategory | "";
  selectedPkg: string;
  isFamilyPkg: boolean;
  familyMemberCount: number;
  familyMembers: FamilyMemberProfile[];
  familyRowIndex: number;
  familyRowIdx: number;
  familyRow: FamRow;
  onSelectCategory: (cat: PackageCategory) => void;
  onSelectPackage: (id: string) => void;
  onFamilyHoursChange: (index: number) => void;
  onOpenMember: (index: number) => void;
}) {
  return (
    <SectionCard>
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-bold text-[#0e2a1e]">
          {copy.packagesSection}
          {req}
        </h2>
        <Link
          href="/pricing"
          className="text-[12px] font-semibold text-[#1C7A45] hover:underline underline-offset-2"
        >
          {isAr ? "صفحة الأسعار ←" : "View pricing →"}
        </Link>
      </div>
      <p className="mb-4 text-[12px] text-[#7a9485]">{copy.packagesChooseCategory}</p>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {(
          [
            { cat: "p" as const, label: copy.packagesPrivate, desc: isAr ? "تعلم مخصص" : "Personalized learning", icon: User },
            { cat: "g" as const, label: copy.packagesGroup, desc: isAr ? "تعلم مع الآخرين" : "Learn with others", icon: Users },
            { cat: "f" as const, label: copy.packagesFamily, desc: isAr ? "تعلموا معاً" : "Learn together", icon: UsersRound },
          ] as const
        ).map(({ cat, label, desc, icon: Icon }) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={[
              "flex items-center gap-3 rounded-xl border p-3 sm:p-4 text-start transition-all",
              packageCategory === cat
                ? "border-[#1C3A2E] bg-[#f4faf5] shadow-sm ring-1 ring-[#1C3A2E]"
                : "border-[#d8e5db] bg-white hover:border-[#4a7a5a] hover:bg-[#f9fbf9]",
            ].join(" ")}
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${packageCategory === cat ? "bg-[#1C3A2E] text-white" : "bg-[#eaf6ee] text-[#4a7a5a]"}`}>
              <Icon size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-[#0e2a1e]">{label}</span>
              <span className="text-[11px] text-[#7a9485] mt-0.5">{desc}</span>
            </div>
          </button>
        ))}
      </div>

      {packageCategory === "p" && (
        <PkgList prefix="p" pkgs={PRIVATE_PKGS} isAr={isAr} selectedPkg={selectedPkg} onSelect={onSelectPackage} />
      )}
      {packageCategory === "g" && (
        <PkgList prefix="g" pkgs={GROUP_PKGS} isAr={isAr} selectedPkg={selectedPkg} onSelect={onSelectPackage} />
      )}
      {packageCategory === "f" && (
        <div>
          <p className="mb-3 text-[12px] text-[#7a9485]">{copy.packagesFamilyHint}</p>
          <label className={labelCls} htmlFor="trial-family-hours">
            {copy.familyHoursLabel}
          </label>
          <div className="relative mt-1 mb-4">
            <select
              id="trial-family-hours"
              className={selectBase}
              value={familyRowIndex}
              onChange={(e) => onFamilyHoursChange(Number(e.target.value))}
            >
              {FAM_ROWS.map((row, i) => (
                <option key={row.hours} value={i}>
                  {row.hours} {isAr ? "ساعات / شهر" : "hours / month"}
                </option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-[#DED3BD] bg-[#FAF7F1] p-3 sm:p-4">
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#D4A017]/35 bg-[#FFF6DE] px-2.5 py-0.5 text-[10px] font-semibold text-[#8B6508]">
                {copy.familyBadge}
              </span>
              <span className="text-[13px] font-bold text-[#2F433B]">
                {familyRow.hours} {isAr ? "ساعات / شهر" : "hours / month"}
              </span>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(["m2", "m3", "m4"] as const).map((tier) => {
                const id = `f:${familyRowIdx}:${tier}`;
                const cell = familyRow[tier];
                const mem =
                  tier === "m2"
                    ? copy.familyMembers2
                    : tier === "m3"
                      ? copy.familyMembers3
                      : copy.familyMembers4;
                const checked = selectedPkg === id;
                return (
                  <li key={id}>
                    <label
                      className={[
                        "flex h-full cursor-pointer flex-col gap-1 rounded-xl border px-3 py-2.5 text-[12px] transition-all",
                        checked
                          ? "border-[#1C3A2E] bg-[#eaf6ee] shadow-sm"
                          : "border-[#ECE3D3] bg-white hover:border-[#4a7a5a]",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={[
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
                            checked ? "border-[#1C3A2E]" : "border-[#b3c9ba]",
                          ].join(" ")}
                        >
                          {checked && <span className="h-2 w-2 rounded-full bg-[#1C3A2E]" />}
                        </span>
                        <input
                          type="radio"
                          name="package"
                          className="sr-only"
                          value={id}
                          checked={checked}
                          onChange={() => onSelectPackage(id)}
                        />
                        <span className="font-semibold text-[#2F433B]">{mem}</span>
                      </div>
                      <div className="ps-6 text-[11px] text-[#60746B]">
                        <span className="tabular-nums">{cell.regular}</span>
                        <span className="mx-1 text-[#9aada6]">→</span>
                        <span className="font-bold tabular-nums text-[#8B6508]">{cell.discounted}</span>
                      </div>
                      <p className="ps-6 text-[10px] text-[#7a9485]">{copy.familyDiscountNote}</p>
                    </label>
                  </li>
                );
              })}
            </ul>

            {isFamilyPkg && familyMemberCount > 0 && (
              <div className="mt-5 border-t border-[#ECE3D3] pt-4">
                <h3 className="text-sm font-bold text-[#0e2a1e]">{copy.familyMembersSection}</h3>
                <p className="mt-1 mb-3 text-[12px] text-[#7a9485]">{copy.familyMembersHint}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {familyMembers.map((member, i) => {
                    const done = isFamilyMemberComplete(member);
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => onOpenMember(i)}
                          className={[
                            "flex w-full flex-col gap-1.5 rounded-xl border px-4 py-3 text-start transition-all",
                            done
                              ? "border-[#1C3A2E] bg-[#eaf6ee] shadow-sm"
                              : "border-[#ECE3D3] bg-white hover:border-[#4a7a5a] hover:bg-[#f4faf5]",
                          ].join(" ")}
                        >
                          <div className="flex w-full items-center justify-between gap-2">
                            <span className="text-[13px] font-bold text-[#0e2a1e]">
                              {copy.familyMemberCard} {i + 1}
                              {member.name.trim() ? (
                                <span className="font-normal text-[#4a6355]"> — {member.name}</span>
                              ) : null}
                            </span>
                            <span
                              className={[
                                "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold",
                                done
                                  ? "bg-[#1C3A2E] text-white"
                                  : "border border-[#D4A017]/35 bg-[#FFF6DE] text-[#8B6508]",
                              ].join(" ")}
                            >
                              {done ? copy.familyMemberComplete : copy.familyMemberIncomplete}
                            </span>
                          </div>
                          <span className="text-[11px] font-semibold text-[#1C7A45]">
                            {copy.familyMemberEdit} →
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedPkg ? (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-dashed border-[#c8d9cd] bg-[#f9fbf9] p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf6ee] text-[#4a7a5a]">
            <ClipboardCheck size={18} />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#0e2a1e]">
              {isAr ? "تم اختيار الباقة — أكمل بياناتك بالأسفل" : "Package selected — complete your details below"}
            </div>
            <div className="text-[11px] text-[#7a9485] mt-0.5">
              {isAr ? "سنقوم بتخصيص أفضل خطة لك." : "We'll customize the best plan for you."}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-dashed border-[#c8d9cd] bg-[#f9fbf9] p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf6ee] text-[#4a7a5a]">
            <ClipboardCheck size={18} />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#0e2a1e]">
              {isAr ? "اختر باقة للمتابعة" : "Select a package to continue"}
            </div>
            <div className="text-[11px] text-[#7a9485] mt-0.5">
              {isAr ? "اختر الفئة ثم حدد الخطة المناسبة." : "Choose a category, then select the right plan."}
            </div>
          </div>
        </div>
      )}
    </SectionCard>
  );
}

function PkgList({
  prefix,
  pkgs,
  isAr,
  selectedPkg,
  onSelect,
}: {
  prefix: "p" | "g";
  pkgs: typeof PRIVATE_PKGS;
  isAr: boolean;
  selectedPkg: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {pkgs.map((pkg, i) => {
        const id = `${prefix}:${i}`;
        const name = isAr ? pkg.name.ar : pkg.name.en;
        const checked = selectedPkg === id;
        return (
          <li key={id}>
            <label
              className={[
                "flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-[13px] transition-all",
                checked
                  ? "border-[#1C3A2E] bg-[#eaf6ee] shadow-sm"
                  : "border-[#d8e5db] bg-white hover:border-[#4a7a5a] hover:bg-[#f4faf5]",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
                  checked ? "border-[#1C3A2E]" : "border-[#b3c9ba]",
                ].join(" ")}
              >
                {checked && <span className="h-2 w-2 rounded-full bg-[#1C3A2E]" />}
              </span>
              <input
                type="radio"
                name="package"
                className="sr-only"
                value={id}
                checked={checked}
                onChange={() => onSelect(id)}
              />
              <span>
                <span className="font-semibold text-[#0e2a1e]">{name}</span>
                <span className="text-[#7a9485]">
                  {" "}
                  · {pkg.hours} {isAr ? "س/شهر" : "h/mo"} · {pkg.launch}
                </span>
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
