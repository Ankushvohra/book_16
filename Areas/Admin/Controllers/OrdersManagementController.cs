using book.DataAccess.Data;
using book.DataAccess.Repository;
using book.DataAccess.Repository.IRepository;
using book.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System;
using System.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace book_16.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class OrdersManagementController : Controller
    {
        private readonly IunitOfWork _unitOfWork;
        private readonly ApplicationDbContext _context; 

        public OrdersManagementController(IunitOfWork unitOfWork,ApplicationDbContext context)
        {
            _context = context;
            _unitOfWork = unitOfWork;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Details(int? id)
        {
            var order = _unitOfWork.OrderHeader.FirstorDefault(s=>s.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            return View(order);
        }
        public IActionResult Dateandtime() { return View(); }
        #region APIs
        [HttpGet]
        public IActionResult GetAll() {
            var orderList = _unitOfWork.OrderHeader.GetAll(includeProperties: "ApplicationUser");
            return Json(new { data = orderList });
        }
        public IActionResult GetP()
        {
            var pendingOrders = _unitOfWork.OrderHeader.GetAll(includeProperties: "ApplicationUser").Where(order => order.Orderstatus == "Pending");
            return Json(new { data = pendingOrders });
        }
        public IActionResult GetS()
        {
            var successOrders = _unitOfWork.OrderHeader.GetAll(includeProperties: "ApplicationUser").Where(order => order.Orderstatus == "Approved");
            return Json(new { data = successOrders });
        }
        public IActionResult GetT(DateTime fromDate, DateTime toDate)
        {
            var dr= _unitOfWork.OrderHeader.GetAll();
            var successOrders =dr.Where(data=>data.OderDate>=fromDate && data.OderDate<=toDate); 

            return Json(new { data = successOrders });
        }

        #endregion
    }
}
