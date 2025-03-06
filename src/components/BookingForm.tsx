import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
  herbalistId?: string;
  herbalistName?: string;
  onSubmit?: (data: BookingFormValues) => void;
  isOpen?: boolean;
}

interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  reason: string;
}

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const BookingForm = ({
  herbalistId = "1",
  herbalistName = "Dr. Jane Smith",
  onSubmit = () => {},
  isOpen = true,
}: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const form = useForm<BookingFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
      time: "",
      reason: "",
    },
  });

  const handleSubmit = (data: BookingFormValues) => {
    // In a real implementation, this would send the data to a server
    console.log("Booking submitted:", data);
    onSubmit(data);
    form.reset();
  };

  return (
    <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-4">
        Book a Consultation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Schedule a virtual appointment with {herbalistName} to discuss your
        health needs.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(123) 456-7890"
                    {...field}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="dark:text-gray-300">Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={
                          "w-full pl-3 text-left font-normal flex justify-between items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        }
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 dark:bg-gray-800 dark:border-gray-700"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() ||
                        date >
                          new Date(
                            new Date().setMonth(new Date().getMonth() + 2),
                          )
                      }
                      initialFocus
                      className="dark:bg-gray-800 dark:text-white"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Time</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    {timeSlots.map((time) => (
                      <SelectItem
                        key={time}
                        value={time}
                        className="dark:text-white"
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">
                  Reason for Consultation
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please briefly describe your health concerns or questions..."
                    className="min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white"
          >
            Book Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
