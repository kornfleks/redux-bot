

export const isTicketValid = ticket => {
  if (ticket.movie
    && ticket.screening)
    return true
  return false
}

export const isTicketsValid = tickets => tickets.reduce((acc, ticket) => acc && isTicketValid(ticket), true)