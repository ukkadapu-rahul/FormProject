using Microsoft.EntityFrameworkCore;
using RegFormApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Enable OpenAPI (optional)
builder.Services.AddOpenApi();

// Add Controllers so your UsersController works
builder.Services.AddControllers();

// EF Core with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS for Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowAngular");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// No HTTPS redirection
// app.UseHttpsRedirection();

app.UseAuthorization();

// *** IMPORTANT ***
app.MapControllers();   // <-- THIS activates /api/users

app.Run();
