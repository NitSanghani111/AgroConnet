import { useState } from "react"
import { MessageSquare, Plus } from "lucide-react"

type SupportTicket = {
  id: string
  subject: string
  description: string
  status: "open" | "in-progress" | "closed"
  createdAt: string
}

const mockTickets: SupportTicket[] = [
  {
    id: "1",
    subject: "Payment Issue",
    description: "Having trouble processing payment for order #123",
    status: "open",
    createdAt: "2024-01-30T10:00:00Z",
  },
  // Add more mock tickets...
]

export function SupportPage() {
  const [tickets] = useState<SupportTicket[]>(mockTickets)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Support</h1>
        {/* Button for New Ticket Dialog */}
        <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" />
          New Ticket
        </button>
      </div>

      {/* Ticket Creation Form (Mock Dialog) */}
      <div className="sm:max-w-[425px] bg-white shadow-lg rounded-md p-6">
        <h2 className="text-xl font-semibold">Create Support Ticket</h2>
        <p className="text-sm text-gray-500 mb-4">Describe your issue and we'll help you resolve it</p>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="subject" className="font-medium">Subject</label>
            <input id="subject" type="text" className="border rounded-md py-2 px-3 w-full" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="font-medium">Description</label>
            <textarea id="description" className="border rounded-md py-2 px-3 w-full" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Tickets List */}
      <div className="grid gap-6">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white border rounded-lg shadow-md">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl font-semibold">{ticket.subject}</h3>
                <p className="text-sm text-gray-500">Created on {new Date(ticket.createdAt).toLocaleDateString()}</p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  ticket.status === "open"
                    ? "bg-green-100 text-green-800"
                    : ticket.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {ticket.status}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{ticket.description}</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-4 w-4" />
                  <input
                    placeholder="Add a reply..."
                    className="border rounded-md py-2 px-3 w-full"
                  />
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
