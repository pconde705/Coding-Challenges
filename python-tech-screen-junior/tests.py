import unittest
from solutions import pairs, is_four_of_kind, merge, dec_to_base_x


class SolutionsTests(unittest.TestCase):

    def test_correct_pair_match(self):
        input_list = pairs([1, 8, 12, 5, 7])
        output_list = ([(1, 8), (1, 12), (1, 5), (1, 7), (8, 12), (8, 5), \
                            (8, 7), (12, 5), (12, 7), (5, 7)])
        self.assertEqual(input_list, output_list)

    def test_correct_pair_match(self):
        input_list = pairs([1, 8, 12, 5, 7])
        output_list = ([(1, 8), (1, 12), (1, 5), (1, 7), (8, 8), (8, 12), (8, 5), \
                            (8, 7), (12, 8), (12, 12), (12, 5), (12, 7), (5, 8), (5, 12), \
                            (5, 5), (5, 7), (7, 8), (7, 12), (7, 5), (7, 7)])
        self.assertNotEqual(input_list, output_list)

    def test_not_four_of_kind(self):
        self.assertTrue(is_four_of_kind(["5","5","Q","5","5"]))

    def test_not_four_of_kind(self):
        self.assertFalse(is_four_of_kind(["5","K","Q","5","4"]))

    def test_sorted_and_merged(self):
        input_lists = merge([1, 3, 5], [2, 4, 6])
        output_list = [1, 2, 3, 4, 5, 6]
        self.assertEqual(input_lists, output_list)

    def test_sorted_and_merged(self):
        input_lists = merge([1, 3, 5], [2, 4, 6])
        output_list = [1, 2, 3, 4, 5]
        self.assertNotEqual(input_lists, output_list)

    def test_base_conversion(self):
        base_and_num = dec_to_base_x(8, 140)
        new_base_string = "214"
        self.assertEqual(base_and_num, new_base_string)

    def test_base_conversion(self):
        base_and_num = dec_to_base_x(2, 5)
        new_base_string = "101"
        self.assertEqual(base_and_num, new_base_string)


if __name__ == '__main__':
    unittest.main()
