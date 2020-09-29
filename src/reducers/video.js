import {
  ALL_VIDEOS_LOADED,
  VIDEO_LOADED,
  ALL_RELATED_VIDEOS_LOADED,
  VIDEO_ERROR,
} from '../actions/types';

const initialState = {
  video: null,
  videos: [
    {
      id: 'abc',
      title: 'Learn JavaScript - Full Course for Beginners',
      channelTitle: 'freeCodeCamp.org',
      publishedAt: '2018-12-10T14:13:40Z',
      description:
        "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.\n\n⭐️Curriculum⭐️\nThis is a stand-alone video but it follows the JavaScript curriculum at freecodecamp.org. Access the curriculum here:\n🔗 Basic JavaScript: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript\n🔗 ES6 JavaScript: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6\n\n⭐️Code⭐️\nThis course was created using scrimba.com. Access the course there along with the code:\n🔗 Basic JavaScript: https://scrimba.com/playlist/pny4ghw\n🔗 ES6 JavaScript: https://scrimba.com/playlist/p7v3gCd\n\n🐦🐦 Follow course creator Beau Carnes on Twitter: https://www.twitter.com/BeauCarnes\n\n⭐️Course Contents⭐️\n0:00:00 Introduction\n0:01:24 Running JavaScript\n0:04:23 Comment Your Code\n0:05:56 Declare Variables\n0:06:15 Storing Values with the Assignment Operator\n0:11:31 Initializing Variables with the Assignment Operator\n0:11:58 Uninitialized Variables\n0:12:40 Case Sensitivity in Variables\n0:14:05 Add Two Numbers\n0:14:34 Subtract One Number from Another\n0:14:52 Multiply Two Numbers\n0:15:12 Dividing Numbers\n0:15:30 Increment\n0:15:58 Decrement\n0:16:22 Decimal Numbers\n0:16:48 Multiply Two Decimals\n0:17:18 Divide Decimals\n0:17:33 Finding a Remainder\n0:18:22 Augmented Addition\n0:19:22 Augmented Subtraction\n0:20:18 Augmented Multiplication\n0:20:51 Augmented Division\n0:21:19 Declare String Variables\n0:22:01 Escaping Literal Quotes\n0:23:44 Quoting Strings with Single Quotes\n0:25:18 Escape Sequences\n0:26:46 Plus Operator\n0:27:49 Plus Equals Operator\n0:29:01 Constructing Strings with Variables\n0:30:14 Appending Variables to Strings\n0:31:11 Length of a String\n0:32:01 Bracket Notation\n0:33:27 Understand String Immutability\n0:34:23 Find the Nth Character\n0:34:51 Find the Last Character\n0:35:48 Find the Nth-to-Last Character\n0:36:28 Word Blanks\n0:40:44 Arrays\n0:41:43 Nest Arrays\n0:42:33 Access Array Data\n0:43:34 Modify Array Data\n0:44:48 Access Multi-Dimensional Arrays\n0:46:30 push()\n0:47:29 pop()\n0:48:33 shift()\n0:49:23 unshift()\n0:50:36 Shopping List\n0:51:41 Write Reusable with Functions\n0:53:41 Arguments\n0:55:43 Global Scope\n0:59:31 Local Scope\n1:00:46 Global vs Local Scope in Functions\n1:02:40 Return a Value from a Function\n1:03:55 Undefined Value returned\n1:04:52 Assignment with a Returned Value\n1:05:52 Stand in Line\n1:08:41 Boolean Values\n1:09:24 If Statements\n1:11:51 Equality Operator\n1:13:18 Strict Equality Operator\n1:14:43 Comparing different values\n1:15:38 Inequality Operator\n1:16:20 Strict Inequality Operator\n1:17:05 Greater Than Operator\n1:17:39 Greater Than Or Equal To Operator\n1:18:09 Less Than Operator\n1:18:44 Less Than Or Equal To Operator\n1:19:17 And Operator\n1:20:41 Or Operator\n1:21:37 Else Statements\n1:22:27 Else If Statements\n1:23:30 Logical Order in If Else Statements\n1:24:45 Chaining If Else Statements\n1:27:45 Golf Code\n1:32:15 Switch Statements\n1:35:46 Default Option in Switch Statements\n1:37:23 Identical Options in Switch Statements\n1:39:20 Replacing If Else Chains with Switch\n1:41:11 Returning Boolean Values from Functions\n1:42:20 Return Early Pattern for Functions\n1:43:38 Counting Cards\n1:49:11 Build Objects\n1:50:46 Dot Notation\n1:51:33 Bracket Notation\n1:52:47 Variables\n1:53:34 Updating Object Properties\n1:54:30 Add New Properties to Object\n1:55:19 Delete Properties from Object\n1:55:54 Objects for Lookups\n1:57:43 Testing Objects for Properties\n1:59:15 Manipulating Complex Objects\n2:01:00 Nested Objects\n2:01:53 Nested Arrays\n2:03:06 Record Collection\n2:10:15 While Loops\n2:11:35 For Loops\n2:13:56 Odd Numbers With a For Loop\n2:15:28 Count Backwards With a For Loop\n2:17:08 Iterate Through an Array with a For Loop\n2:19:43 Nesting For Loops\n2:22:45 Do...While Loops\n2:24:12 Profile Lookup\n2:28:18 Random Fractions\n2:28:54 Random Whole Numbers\n2:30:21 Random Whole Numbers within a Range\n2:31:46 parseInt Function\n2:32:36 parseInt Function with a Radix\n2:33:29 Ternary Operator\n2:34:57 Multiple Ternary Operators\n2:36:57 var vs let\n2:39:02 var vs let scopes\n2:41:32 const Keyword\n2:43:40 Mutate an Array Declared with const\n2:44:52 Prevent Object Mutation\n2:47:17 Arrow Functions\n2:28:24 Arrow Functions with Parameters\n2:49:27 Higher Order Arrow Functions\n2:53:04 Default Parameters\n2:54:00 Rest Operator\n2:55:31 Spread Operator\n2:57:18 Destructuring Assignment: Objects\n3:00:18 Destructuring Assignment: Nested Objects\n3:01:55 Destructuring Assignment: Arrays\n3:03:40 Destructuring Assignment with Rest Operator to Reassign Array\n3:05:05 Destructuring Assignment to Pass an Object\n3:06:39 Template Literals\n3:10:43 Simple Fields\n3:12:24 Declarative Functions\n3:12:56 class Syntax\n3:15:11 getters and setters\n3:20:25 import vs require\n3:22:33 export\n3:23:40 * to Import\n3:24:50 export default\n3:25:26 Import a Default Export\n\n🎥And if you like robots and toys, check out Beau's other YouTube channel: https://www.youtube.com/robotfamily",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
    },
  ],
  loading: false,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_VIDEOS_LOADED:
    case ALL_RELATED_VIDEOS_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        videos: payload,
      };
    case VIDEO_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        video: payload,
      };
    case VIDEO_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
