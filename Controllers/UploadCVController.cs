using api.Models;
using api.Repository.Interface;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class UploadCVController : BaseAPIController
    {
        private ICurriculumVitae _ICurriculumVitae;

        public UploadCVController(ICurriculumVitae ICurriculumVitae)
        {
            _ICurriculumVitae = ICurriculumVitae;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(CV model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _ICurriculumVitae.AddCV(model);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
            return Ok("success");
        }
    }
}