export default function TermsCheckbox() {
    return (
      <div className="flex items-center text-sm mt-2">
        <input
          type="checkbox"
          id="terms"
          className="mr-2 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="text-gray-700">
          I agree with{" "}
          <span className="text-[#FA8B02] cursor-pointer">Terms</span> and{" "}
          <span className="text-[#FA8B02] cursor-pointer">Privacy</span>
        </label>
      </div>
    );
  }
  