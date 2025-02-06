"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationType } from "@/lib/types";
import { useSearchParams, useRouter } from "next/navigation";

export function PaginationComponent({
  pagination,
}: {
  pagination: PaginationType;
}) {
  const { current_page, last_visible_page, has_next_page } = pagination;
  const searchParams = useSearchParams();
  const router = useRouter();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const generatePageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (last_visible_page <= 7) {
      for (let i = 1; i <= last_visible_page; i++) pages.push(i);
    } else {
      pages.push(1);

      if (current_page > 3) pages.push("...");

      const startPage = Math.max(2, current_page - 1);
      const endPage = Math.min(last_visible_page - 1, current_page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (current_page < last_visible_page - 2) pages.push("...");

      pages.push(last_visible_page);
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => goToPage(current_page - 1)}
            className={
              current_page === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {generatePageNumbers().map((page, index) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => goToPage(page)}
                className={`${
                  current_page === page ? "bg-primary text-background" : ""
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => goToPage(current_page + 1)}
            className={!has_next_page ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
