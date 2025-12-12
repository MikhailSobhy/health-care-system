import { useState } from "react";
import { cn, getAvatarColor, getFirstCharachter } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Arrow from "../../../assets/icons/arrow.svg";
import CheckIcon from "../../../assets/icons/check.svg";
import PendingIcon from "../../../assets/icons/pending.svg";
import CancelledIcon from "../../../assets/icons/cancelled.svg";
import { Button } from "@/components/ui/button";
import AdminDialog from "./AdminDialog";
import { AdminComboBox } from "./AdminComboBox";
import { FieldTextarea } from "@/shared/components/FieldTextarea";
import { DatePicker } from "@/shared/components/DatePicker";

const allData = [
  {
    id: 1,
    patientName: "deang solia",
    date: "Paid",
    status: "scheduled",
    doctorName: "Dr. islam saeed",
  },
  {
    id: 1,
    patientName: "deang morsy",
    date: "Paid",
    status: "pending",
    doctorName: "Dr. islam saeed",
  },
  {
    id: 1,
    patientName: "deang morsy",
    date: "Paid",
    status: "cancelled",
    doctorName: "Dr. islam saeed",
  },
];
const uniquieDoctorsNames = [
  ...new Set(allData.map((item) => item.doctorName)),
];

export function AdminTable() {
  const [openScheduleDialog, setOpenScheduleDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

  return (
    <div className="px-container mt-10">
      <Table className=" text-white  rounded-md shadow-md border border-[rgb(28,32,35)] table-striped">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="bg-black  ">
          <TableRow className=" border-none  hover:bg-transparent">
            <TableHead className=" text-white py-4 px-5">Patient</TableHead>
            <TableHead className="text-white py-4 px-5">Date</TableHead>
            <TableHead className="text-white py-4 px-5">Status</TableHead>
            <TableHead className="text-start text-white py-4 px-5">
              Doctor
            </TableHead>
            <TableHead className="text-end text-white py-4 px-5">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((data) => (
            <TableRow
              key={data.id}
              className=" border-none  hover:bg-[rgb(28,32,35)]"
            >
              <TableCell className="font-medium py-4 px-5 ">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      getAvatarColor(allData.indexOf(data)),
                      "rounded-full text-xs w-8 h-8 flex items-center justify-center text-black"
                    )}
                  >
                    {getFirstCharachter(data.patientName)}
                  </span>
                  <span className="text-sm ">{data.patientName}</span>
                </div>
              </TableCell>

              <TableCell className="py-4 px-5">{data.date}</TableCell>

              <TableCell className="py-4 px-5">
                <div
                  className={cn(
                    "px-2 py-1 rounded-full flex items-center gap-2 w-fit",
                    data.status === "scheduled"
                      ? "bg-[#0D2A1F] text-green-400"
                      : data.status === "pending"
                      ? "bg-[#152432] text-[#79B5EC]"
                      : data.status === "cancelled"
                      ? "bg-[#3E1716] text-[#F37877]"
                      : ""
                  )}
                >
                  <span>
                    {data.status === "scheduled" ? (
                      <img
                        className="w-3 h-3"
                        src={CheckIcon}
                        alt={data.status}
                      />
                    ) : data.status === "pending" ? (
                      <img
                        className="w-3 h-3"
                        src={PendingIcon}
                        alt={data.status}
                      />
                    ) : data.status === "cancelled" ? (
                      <img
                        className="w-3 h-3"
                        src={CancelledIcon}
                        alt={data.status}
                      />
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="text-sm ">{data.status}</span>
                </div>
              </TableCell>

              <TableCell className="text-start py-4 px-5">
                {data.doctorName}
              </TableCell>
              <TableCell className="text-right py-4 px-5">
                {/* let`s start the fuckin  dialog*/}
                <Button
                  className="text-[#24AE7C] bg-transparent  hover:bg-transparent p-0 cursor-pointer"
                  onClick={() => setOpenScheduleDialog(true)}
                >
                  Schedule
                </Button>

                <Button
                  className="text-white bg-transparent hover:bg-transparent cursor-pointer"
                  onClick={() => setOpenCancelDialog(true)}
                >
                  Cancel
                </Button>
                {/* let`s end finishing the fuckin  dialog*/}
              </TableCell>

              <AdminDialog
                doctorName={data.doctorName}
                allDoctors={uniquieDoctorsNames}
                open={openScheduleDialog}
                onOpenChange={setOpenScheduleDialog}
              >
                <AdminComboBox />
                <FieldTextarea />
                <DatePicker />
                <Button className="w-full bg-[#24AE7C] px-1 py-1.5 text-white rounded-md">
                  Schedule appointment
                </Button>
              </AdminDialog>

              <AdminDialog
                open={openCancelDialog}
                onOpenChange={setOpenCancelDialog}
              >
                <FieldTextarea />
                <Button className="w-full bg-[#F24E43] px-1 py-1.5 text-white rounded-md">
                  Cancel appointment
                </Button>
              </AdminDialog>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent  border-[rgb(28,32,35)]  ">
          <TableRow className=" border-none  hover:bg-transparent ">
            <TableCell className="py-3 px-5 cursor-pointer " colSpan={4}>
              <img
                className=" p-2 bg-[rgb(28,32,35)]  rounded-sm"
                src={Arrow}
                alt="arrow"
              />
            </TableCell>
            <TableCell className="py-3 px-5 cursor-pointer float-end">
              <img
                className=" rotate-180 bg-[rgb(28,32,35)] p-2 rounded-sm"
                src={Arrow}
                alt="arrow"
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
