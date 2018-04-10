import unittest
from solutions import pairs, is_four_of_kind, merge, dec_to_base_x
 

class SolutionsTests(unittest.TestCase):

    def test_not_four_of_kind(self):
        self.assertTrue(is_four_of_kind(["5","5","Q","5","5"]))
 
 
if __name__ == '__main__':
    unittest.main()
