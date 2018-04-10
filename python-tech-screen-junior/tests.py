import unittest
from solutions import pairs, is_four_of_kind, merge, dec_to_base_x


class SolutionsTests(unittest.TestCase):

    def test_not_four_of_kind(self):
        self.assertTrue(is_four_of_kind(["5","5","Q","5","5"]))

    def test_not_four_of_kind(self):
        self.assertFalse(is_four_of_kind(["5","K","Q","5","4"]))

    def test_correct_pair_match(self):
        self.assertTrue(pairs(["5","5","Q","5","5"]))

    def test_correct_pair_match(self):
        self.assertFalse(pairs(["5","K","Q","5","4"]))

    def test_not_four_of_kind(self):
        self.assertTrue(merge(["5","5","Q","5","5"]))

    def test_not_four_of_kind(self):
        self.assertFalse(merge(["5","K","Q","5","4"]))

    def test_not_four_of_kind(self):
        self.assertTrue(dec_to_base_x(["5","5","Q","5","5"]))

    def test_not_four_of_kind(self):
        self.assertFalse(dec_to_base_x(["5","K","Q","5","4"]))


if __name__ == '__main__':
    unittest.main()
