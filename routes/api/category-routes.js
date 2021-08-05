const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  });
  res.json(categoryData);
});

router.get("/:id", async (req, res) => {
  const oneCategory = await Category.findOne({
    include: [
      {
        model: Product,
        where: { id: req.params.id }, //this will grab the specific pk
      },
    ],
  });

  if (!oneCategory) {
    res.status(404).json({ message: "Category id does not exist!" });
    return;
  }
  res.json(oneCategory);
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  const newCategory = await Category.create({
    category_name: req.body.category_name,
  });
  res.json(newCategory);
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update({
    where: { id: req.params.id },
  });
  res.json(updateCategory);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({
    where: { id: req.params.id },
  });
  res.json(deleteCategory);
});

module.exports = router;
