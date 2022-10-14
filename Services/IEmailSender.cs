using SendGrid;

namespace Training_Project_1.Services
{
    public interface IEmailSender
    {
        Task<Response> SendEmailAsync(string toEmail, string subject, string? message);
    }
}
