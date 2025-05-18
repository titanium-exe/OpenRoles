import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);
  return (
    <div>
      <Table>
        <TableCaption>Registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          // here
          {companies.length <= 0 ? (
            <span>no companies found</span>
          ) : (
            <>
              {companies?.map((company) => {
                return (
                  <div key={company._id}>
                    <TableCell>
                      <Avatar>
                        <AvatarImage
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/job-search-11676412-9520638.png?f=webp&w=512"
                          className="h-12 w-12 object-contain"
                        />
                      </Avatar>
                    </TableCell>
                    <TableCell>company.name</TableCell>
                    <TableCell>company.createdAt.split("T")[0]</TableCell>
                    <TableCell className="text-right">
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                          <div className="flex items-center gap-2 w-fit cursor-pointer">
                            <Edit2 className="w-4" />
                            <span>Edit</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </div>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
