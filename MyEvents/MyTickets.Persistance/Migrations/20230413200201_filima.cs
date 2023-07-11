using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyTickets.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class filima : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("1babd057-e980-4cb3-9cd2-7fdd9e525668"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2024, 2, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3536), null });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("3448d5a4-0f72-4dd7-bf15-c14a46b26c00"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2024, 1, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3251), null });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("62787623-4c52-43fe-b0c9-b7044fb5929b"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 8, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3514), null });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("adc42c09-08c1-4d2c-9f96-2d15bb1af299"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 12, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3555), null });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("b419a7ca-3321-4f38-be8e-4d7b6a529319"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 8, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3495), null });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("ee272f8b-6096-4cb6-8625-bb4bb2d89e8b"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 10, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3157), null });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("3dcb3ea0-80b1-4781-b5c0-4d85c41e55a6"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3853));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("771cca4b-066c-4ac7-b3df-4d12837fe7e0"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3830));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("7e94bc5b-71a5-4c8c-bc3b-71bb7976237e"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3786));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("86d3a045-b42d-4854-8150-d6a374948b6e"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3810));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("ba0eb0ef-b69b-46fd-b8e2-41b4178ae7cb"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3925));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("e6a2679c-79a3-4ef1-a478-6f4c91b405b6"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3881));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("f5a6a3a0-4227-4973-abb5-a63fbe725923"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 23, 2, 1, 482, DateTimeKind.Local).AddTicks(3905));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("1babd057-e980-4cb3-9cd2-7fdd9e525668"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2024, 2, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6527), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/conf.jpg" });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("3448d5a4-0f72-4dd7-bf15-c14a46b26c00"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2024, 1, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6419), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/michael.jpg" });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("62787623-4c52-43fe-b0c9-b7044fb5929b"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 8, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6514), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/guitar.jpg" });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("adc42c09-08c1-4d2c-9f96-2d15bb1af299"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 12, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6543), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/musical.jpg" });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("b419a7ca-3321-4f38-be8e-4d7b6a529319"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 8, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6495), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/dj.jpg" });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "EventId",
                keyValue: new Guid("ee272f8b-6096-4cb6-8625-bb4bb2d89e8b"),
                columns: new[] { "Date", "ImageUrl" },
                values: new object[] { new DateTime(2023, 10, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6354), "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/banjo.jpg" });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("3dcb3ea0-80b1-4781-b5c0-4d85c41e55a6"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6604));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("771cca4b-066c-4ac7-b3df-4d12837fe7e0"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6592));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("7e94bc5b-71a5-4c8c-bc3b-71bb7976237e"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6564));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("86d3a045-b42d-4854-8150-d6a374948b6e"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6579));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("ba0eb0ef-b69b-46fd-b8e2-41b4178ae7cb"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6644));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("e6a2679c-79a3-4ef1-a478-6f4c91b405b6"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6617));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: new Guid("f5a6a3a0-4227-4973-abb5-a63fbe725923"),
                column: "OrderPlaced",
                value: new DateTime(2023, 4, 13, 22, 17, 33, 769, DateTimeKind.Local).AddTicks(6632));
        }
    }
}
